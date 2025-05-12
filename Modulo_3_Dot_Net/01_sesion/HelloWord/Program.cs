using System;

class Program{

    private static Dictionary<string, string> usuarios = new Dictionary<string, string>{
        {"admin","qwerty"},
        {"usuario","pass"},
        {"test","test"}
    };
    static void Main(string[] args){

        //Esto es un comentario
        /*
        Esto es un comentario
        */

        //Mensaje de bienvenida
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesión");

        //Definir el usuario y la contraseña
        string usuarioCorrecto = "Admin";
        String passCorrecto = "qwerty";

        Console.WriteLine("Escribe tu usuario");
        string? usuarioIngresado = Console.ReadLine();
        Console.WriteLine("Escribe tu contraseña");
        string? passIngresada = Console.ReadLine();

        if(usuarioIngresado != null){
            if(usuarios.ContainsKey(usuarioIngresado) && usuarios[usuarioIngresado] == passIngresada){
                Console.WriteLine("Haz ingresado con éxito");
                for(int i = 1; i <= 50; i++){
                    Console.WriteLine($"{i}. Hola Usuario, gracias!!!");
                }
                Console.WriteLine("\n Presiona Enter para salir del programa...");
                Console.ReadLine();
            }
            else{
                Console.WriteLine("Usuario y/o contraseña incorrecto");
                Console.WriteLine("\n Presiona Enter para salir del programa...");
                Console.ReadLine();
            }
        }
    }
}