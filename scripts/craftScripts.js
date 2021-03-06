// Ideally would be better have this data in a file but since running on local computer javascript 
// is not able to read local file without user intervention.
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// NOTE:  any new tips added will be lost once user gets out of the page
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var tips = ["What is the best beading string to use?",       
            "M.E.",                     
            "In my opinion FireLine beading thread is one of the best threads I've used. There is one setback that I dislike is that if you use too long of a piece it has a tendacy to knot up.  A trick I've used is to use a fabric softner sheet and rub it on the thread that has helped.",
            "Tip on helping your tension as you crochet.",
            "M.E.",
            "If you are working on a large crochet project and notice that each time you start to crochet your tension starts off differently then have a side project.  Have another small project or just crochet something you are willing to undo so you can relax and get your stride.  Once you feel you are back to your normal tension pickup your main project and continue to crochet.",
            "Don't break the bank with Acrylic Pour painting supplies.",
            "M.E.",
            "If you are a beginner with acrylic pour painting don't think you have to spend alot of money on high-end acrylic paints.  Stop by your neighborhood craft store or even Wal-mart and buy Apple Barrel, Folk Art, etc..  These paints give you a flowing consistency that is needed when pouring."
            ];

// function will generate HTML code to display tips found in tips array
// Note:  Any submission added will be displayed immediately but will be lost once user
//        leaves the page.
function arrayToHtml() {
    let fullString = '';
    let tipsList = '';
    const startDiv = '<div>';
    const endDiv = '</div>';
                        
    const lb = '<br>';
    let newTip = 0;
    let endTip = 2;
    const auth ='Submited By: ';
    const ti = 'Title: '
    
    for (i = 0; i < tips.length; i++)
    {
        if (i == newTip)
        { // start of new Tip add Div and author string
            fullString += startDiv  + ti + tips[i] + lb;
            
            newTip += 3;
        } else if (i == endTip)
        { // end of Tip add text and close Div
            fullString += tips[i] + endDiv;
            endTip +=3;
        } else 
        { // add Author data
            fullString += '<em>' + auth + tips[i] + '</em>' + lb + lb;
        }
    
    }
    
    document.getElementById("tipData").innerHTML = fullString;
    // console.log(fullString);

}

//function will add submitted tip to tips array to be displayed while 
// still on the page.
function writeToArray()
{   
    
    let title = document.getElementById('title').value;
    if (title == null || title == '' || title == 'undefined'){
        alert("Title must be entered.");
        return;
    }
    let msg = document.getElementById('newTip').value;
    if (msg == null || msg == '' || msg == 'undefined'){
        alert("Message must be entered.");
        return;
    }

    tips.push(title);

    let name = document.getElementById('fullName').value;
    tips.push(name);
    
    tips.push(msg);

    // call function to display tips on page
    arrayToHtml();  

    document.getElementById('tipsForm').reset();
}

// add gallery images to project page
function projectList () {
    let imgCard;
    let divCard;

        for (let i = 1; i < 34; i++){
            divCard = document.createElement("div");
            divCard.setAttribute("class","card col-md-3 col-lg-2 text-center");
            imgCard = document.createElement("img");
            imgCard.setAttribute("src","images/craftgallery/" + i +".jpg?xxxx="+ Date.now());
            imgCard.setAttribute("alt","craft picture");
            divCard.appendChild(imgCard);
            document.getElementById("pictures").appendChild(divCard);
        }
}

jQuery(document).ready(function() {
    // handle when tips page is selected 
    // call function to add tips to page
    $("#g-tips").click(arrayToHtml());
    // when project gallery page is selected
    // call function to display images for gallery
    $("#g-gallery").click(projectList());
    // once user submits display Thank you
    $("#craftySubmit").click(() =>{
        $("#cError").html('Thank you');
    });
});