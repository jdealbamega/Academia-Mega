# Sesión 23: ASP.NET y C#

## Fecha: 11/06/2025

## Objetivos de la Sesión

- Construir cliente de Chat

## Temas Cubiertos

1. **ASP.NET y C#**
   - Construir cliente de Chat

## Ejercicios Realizados

### Ejercicio 1: Construir cliente de Chat

```csharp
using GrpcChat;
using Grpc.Core;

// See https://aka.ms/new-console-template for more information
Console.WriteLine("¿Cuál es tu nombre?");
var user = Console.ReadLine() ?? "annonymus";

using var channel = GrpcChannel.ForAddress("http://localhost:5155",
            new GrpcChannelOptions {UnsafeUseInsecureChannelCallCredentials = true});

var client = new ChatService.CharServiceClient(channel);

//1 Abrir el stream
using var call = client.Chat();

//2. Lanzar una tarea para escuchar los mensajes
var readTask = Task.Run(async () =>
{
    await foreach (var incoming in call.ResponseStream.ReadAllAsync())
    {
        var timeSend = DateTimeOffset.FromUnixTimeMilliseconds(incoming, Timestamp).ToLocalTime().ToString("HH:mm:ss");
        Console.ForegroundColor = incoming.User == user ? ConsoleColor.Cyan : ConsoleColor.Yellow;
        Console.WriteLine($"[{timeSend}] {incoming.User}: {incoming.Text}");
        Console.ResetColor();
    }
});

//Hacer el join
await call.RequestStream.WriteAsync(new ChatMessage
{
    User = user,
    Text = $"{user} se ha unido al chat",
    TimeStamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
});

//Enviar los mensajes
string? line;
while (!string.IsNullOrEmpty(line = Console.ReadLine()))
{
    await call.RequestStream.WriteAsync(new ChatMessage
    {
        User = user,
        Text = line,
        TimeStamp = DateTimeOffset.UtcNow.ToUnixTimeMilliseconds()
    });
}

await call.RequestStream.CompleteAsync();
await readTask;

```
## Desafíos Encontrados

- 

## Recursos Adicionales

- 

## Próximos Pasos

- Crear el servidor de chat.

## Reflexiones Personales

Esta sesión me ayudó a como utilizar la libreria Grpc para crear un cliente de Chat.

---

*Entregable correspondiente a la Clase 23 del Módulo 3: ASP .NET y C#*