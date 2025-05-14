using System.Diagnostics.Contracts;

public struct Punto{
    public int X;

    public Punto(int x){
        this.X = x;
    }

    public void Display(){
        Console.WriteLine(X);
    }

}