using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class playGame : System.Web.UI.Page

{
    public void Page_Load(object sender, EventArgs e)
    {
        string createdWord = "";
        string categoryChoice = "";
        //    // WordGenerator generates random word depending on catagory selcted on home screen 
        // and places into hidden value within page, javascipt can then use this to display 
        //category and generate hidden word from this category.
        createdWord = WordGenerator.GetCategory();
        hiddenCsharpdata.Value = createdWord;

        categoryChoice = System.Web.HttpContext.Current.Session["userChoice"].ToString();
        categoryInfo.Value = categoryChoice;

}

    public partial class _Default : System.Web.UI.Page
    {
        public string CsVariable = "hello world";
    }

    //private static void NewMethod()
    //{
    //    string chosenCategory = HttpContext.Current.Session["userChoice"].ToString();
    //}

    protected void PlayAgainButton_Click(object sender, EventArgs e)
    {
        // Play again button redirects user to home screen
        Response.Redirect("Default.aspx");
    }

}













    