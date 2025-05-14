# Sesión 02: Fundamentos de Windows Scripting

## Fecha: 13/05/2025

## Objetivos de la Sesión

- Uso de funciones

## Temas Cubiertos

1. **Fundamentos de Windows Scripting**
   - Funciones en C#

## Ejercicios Realizados

### Ejercicio 1: Crear un Login

```csharp
using System;
using System.Text;

class Program{

    private static Dictionary<string, string> usuarios = new Dictionary<string, string>{
        {"admin","qwerty"},
        {"usuario","pass"},
        {"test","test"}
    };
    private const int MAX_ATTEMPS = 5;
    static void Main(string[] args){

        //Esto es un comentario
        /*
        Esto es un comentario
        */

        //Mensaje de bienvenida
        Console.WriteLine("Este es el programa oficial de Hola Mundo");
        Console.WriteLine("Tienes que iniciar sesión");

        //Definir el usuario y la contraseña
        //string usuarioCorrecto = "Admin";
        //String passCorrecto = "qwerty";

        Console.WriteLine("Escribe tu usuario");
        string? usuarioIngresado = TryLogin();
        
        if(usuarioIngresado != null){
            Console.WriteLine($"Hola {usuarioIngresado}!");
        }
        else{
            Console.WriteLine("Haz excedido el número máximo de intentos");
        }

        /*
        TODO
            Número máximo de intentos
            Lea la contraseña sin mostrarla
            Mostrar tipo de usuario logueado
        */

        
    }
    private static string? TryLogin(){
        int intentosRestantes = MAX_ATTEMPS;
        while(intentosRestantes > 0){
            Console.WriteLine($"\nIntentos restantes: {intentosRestantes}");
            Console.Write("Ingresa tu nombre de usuario: ");
            string? userLogged = Console.ReadLine();
            Console.WriteLine("Escribe tu contraseña");
            string? passIngresada = ReadPassword();
            
            if(userLogged != null){
                if(string.IsNullOrWhiteSpace(userLogged) || string.IsNullOrWhiteSpace(passIngresada)){
                    Console.WriteLine("\nError: El usuario y/o contraseña no pueden estar vacíos");
                    intentosRestantes--;
                    continue;
                }
                if(usuarios.ContainsKey(userLogged) && usuarios[userLogged] == passIngresada){
                    Console.WriteLine("Haz ingresado con éxito");
                    Console.WriteLine("Acceso concedido!!");
                    return userLogged;
                }
                else{
                    Console.WriteLine("Usuario y/o contraseña incorrecto");
                    Console.WriteLine("\n Intentalo de nuevo");
                    intentosRestantes --;
                }
            }
        }
        return null;
    }

    private static string? ReadPassword(){
        StringBuilder password = new StringBuilder();
        ConsoleKeyInfo keyInfo;

        do{
            keyInfo = Console.ReadKey(true);

            if(!char.IsControl(keyInfo.KeyChar)){
                password.Append(keyInfo.KeyChar);
                Console.Write("*");
            }
            else if(keyInfo.Key == ConsoleKey.Backspace && password.Length > 0){
                password.Remove(password.Length - 1, 1);
                Console.Write("\b \b");
            }
        }while(keyInfo.Key != ConsoleKey.Enter);

        Console.WriteLine();
        return password.ToString();
    }
}
```
## Desafíos Encontrados

-

## Recursos Adicionales

- 

## Próximos Pasos

- Creación de un API

## Reflexiones Personales

Esta sesión me ayudó a conocer el uso de funciones para realizar un programa más estético y limpio.

---

*Entregable correspondiente a la Clase 02 del Módulo 3: ASP .NET y C#*