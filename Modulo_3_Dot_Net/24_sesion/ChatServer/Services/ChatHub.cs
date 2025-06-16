using System.Collections.generic;
using GrpcChat;
using Grpc.Core;

namespace ChatServer.Services;

///<symmary> 
/// Gestiona las conexiones y reenvia los mensajes 
/// </symmary>
/// 
public class ChatHub
{
    private readonly ConcurrentDictionary<string, IServerStreamWriter<ChatMessage>> _streams = new();

    public void Join(string user, IServerStreamWriter<ChatMessage> stream)
        => _streams[user] = stream;

    public void Leave(string user)
        => _streams.TryRemove(user, out _);

    public async Task BroadcastAsync(ChatMessage msg, CancellationToken ct)
    {
        foreach (var item in _streams)
        {
           if(ct.IsCancelationRequested)
            await item.Value.WriteAsync(msg);
        }
    }


}