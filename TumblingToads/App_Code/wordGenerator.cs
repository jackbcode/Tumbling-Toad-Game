using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


public class WordGenerator
{
    //string arrays to hold Category words
    public static string[] Amphibians = { "frog", "newt", "toad", "axolotl", "salamander" };
    public static string[] Reptiles = { "lizard", "snake", "turtle", "tortoise", "gecko" };
    public static string[] Fish = { "tuna", "guppy", "swordfish", "goldfish", "carp" };
    public static string[] Birds = { "pidgeon", "eagle", "pelican", "vulture", "flamingo" };
    public static string[] Mammals = { "dog", "giraffe", "elephant", "zebra", "moose" };
    public static string[] words;
    public static string Word { get; set; }

    public static string GetCategory()
    {
        //session retrieved from home screen and selection of Categgory held in userChoice
        string choiceMade = System.Web.HttpContext.Current.Session["userChoice"].ToString();

        //switch statement for user choice, generated random word depending on user category selection
        switch (choiceMade)
        {

            case "Amphibian's":
                words = Amphibians;
                break;
            case "Reptile's":
                words = Reptiles;
                break;
            case "Fish":
                words = Fish;
                break;
            case "Bird's":
                words = Birds;
                break;
            case "Mammal's":
                words = Mammals;
                break;
        }
        Random random = new Random();
        int randomnum = random.Next(0, 5);
        Word = words[randomnum];
        return Word;


    }

    public WordGenerator()
    {
    }
}











