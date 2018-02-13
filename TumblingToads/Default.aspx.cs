using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }

    protected void buttonAmphibian_Click(object sender, ImageClickEventArgs e)
    {
        Session["userChoice"] = "Amphibian's";
        Response.Redirect("playGame.aspx");
         
    }

    protected void buttonReptile_Click(object sender, ImageClickEventArgs e)
    {
        Session["userChoice"] = "Reptile's";
        Response.Redirect("playGame.aspx");
       
    }

    protected void buttonFish_Click(object sender, ImageClickEventArgs e)
    {
        Session["userChoice"] = "Fish";
        Response.Redirect("playGame.aspx");
        
    }

    protected void buttonBird_Click(object sender, ImageClickEventArgs e)
    {
        Session["userChoice"] = "Bird's";
        Response.Redirect("playGame.aspx");
        
    }

    protected void buttonMammal_Click(object sender, ImageClickEventArgs e)
    {
        Session["userChoice"] = "Mammal's";
        Response.Redirect("playGame.aspx");
        
    }
}