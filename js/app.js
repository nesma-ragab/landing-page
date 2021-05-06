

/**
 * Define Global Variables
 * 
*/


    
   
    const fragment = document.createDocumentFragment();
    let sec = document.querySelectorAll(" section ");
    const unorderedList = document.querySelector("#navbar__list");
    /**
     * End Global Variables
     * Start Helper Functions
     *
    */
    sec.forEach( (element)=> {
     
      const dataNav = element.getAttribute("data-nav");
      const newList = document.createElement("li");
      const newLink = document.createElement("a");
      const textN = document.createTextNode(dataNav);
      newLink.addEventListener("click", () => {
        element.scrollIntoView({ behavior: "smooth" });
      });

      newLink.appendChild(textN);
      newList.appendChild(newLink);
      fragment.appendChild(newList);
  
    });
  
    unorderedList.appendChild(fragment);

    

    window.addEventListener("scroll",()=>{
      sec.forEach( (section)=>{
         const react=section.getBoundingClientReact();
          if(react.top>=-75 && react.top<=220){

            sec.forEach( (remover)=>{
              remover.classList.remove("your-active-class") ;
              })
              
             section.classList.toggle("your-active-class");

              const allAnchors =document.querySelectorAll("a");
              allAnchors.forEach((alink)=>{
                  if(section.getAttribute('data-nav')==alink.textContent)
                  alink.classList.add("your-active-class");
                  
              })

              
              
          }
      })
      
  });

  
 



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


