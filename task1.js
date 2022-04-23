const main = () => {

    // here is the program starting point
    const onClickReset = () => {
        console.log("Reset");
        r1.value="";
        r2.value="";

      }  
      const insertRandomWords = (eachElement) => {
        const randomRabbit = [];
        for (let e = 0; e < eachElement.length; e++) {
            const rng = Math.random();
            if (rng < 0.1 ) {
                eachElement[e] = searchWord.value;
            }
            randomRabbit.push(eachElement[e]);
           console.error(randomRabbit);
        }
        return randomRabbit;           // here you need to return the array with the added random words which you just created
      }

      const r1 = document.querySelector(".input");

      const r2 = document.querySelector(".return");
      
      const s = document.querySelector(".startbt");
      
      const c =  document.querySelector(".clearbt");
      
      const rab = document.querySelector(".rabbits");

      const searchWord = document.querySelector(".search");

      s.addEventListener("click", (e) => { //Starts program and saves textarea value
          //console.log("Clicked");
          const inputText = r1.value; //Transforms text from textarea into an array
          const splitLines = inputText.split('\n').filter(x => x.length); // Splits lines
          function rabbitsFilter(arr, query) {
              return arr.filter(function(el) {
                return el.toLowerCase().indexOf(query.toLowerCase()) !== -1
              })
            }
            
          const b = rabbitsFilter(splitLines, searchWord.value); 
          r2.value = b.join("\n");
          
          /*
          const text = r1.value.split()
          console.log(text) //Array []
          if (text.includes("rabit")){
              return r2.value=text;
          } else {
              return r2.value="No Rabits";
          }
          */
      
      })
         
      c.addEventListener("click", (e) => onClickReset()) // Resets both textareas
 
      rab.addEventListener("click", (e) => { // Resets both both text areas and adds 10 lines...
         // console.log("Rabbits!!!")
        onClickReset();
        const tl= ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.", 
              "Donec eget odio sodales, bibendum erat sit amet, viverra elit.",
              "Aenean commodo mi nec odio accumsan iaculis.",
              "Sed nec felis hendrerit risus accumsan fermentum.",
              "Sed commodo nisi at placerat gravida.",
              "Phasellus porttitor arcu sed eros eleifend, in aliquet ex laoreet.",
              "Sed a tortor vitae nibh suscipit vehicula.",
              "Duis maximus ligula in sem sodales tincidunt.",
              "Nullam a purus sed lorem semper malesuada vel eget massa.",
              "Aenean dapibus urna sed leo mattis rhoncus."];
      
        var splitArray = [];
      
        for (let line of tl) {
              //console.log(i);
              const tl = line;
              console.log(line)
              const eachElement = tl.split(" ").filter(tl => tl.length); //Splits the string
              console.log(eachElement);
              const randomRabbit = insertRandomWords(eachElement);
      
              
              const rabbitString = randomRabbit.join(" "); // Converts string from new array to text
              splitArray.push(rabbitString);
              console.warn(rabbitString)
              
          }
        r1.value=splitArray.join("\n");
      
        console.log(splitArray);
      })
      
          /*
          var randomRabit=[];
          for (var i of tl) {
              //console.log(i);
              const tl1 = i;
              const stext1 = tl1.split(" ").filter(x => x.length); //Splits the string
              const wr1 = stext1[Math.floor(Math.random()*stext1.length)]; //randomly selects 1 word
              const ntext1 = tl1.replace (wr1 , "rabit"); // replaces the word chosen by "rabit"
              randomRabit.push(ntext1);
          }
          const splitArray = randomRabit.join("\n"); // Converts string from new array to text
          r1.value= splitArray; 
      
      
      
          const tl2 = tl[1];
          const stext2 = tl2.split(" ").filter(x => x.length);
          const wr2 = stext2[Math.floor(Math.random()*stext2.length)];
          const ntext2 = tl2.replace (wr2 , "rabit")
      
      
      
      
          r1.value= ntext1 + "\n" + ntext2;
      
          */
          
      
      
          /*   TEST 1
          tl.forEach (element => {
              const rr = tl.replace( / +/g , " rabit ");
              console.log(rr);
          })
          --------------------------------------------------
              TEST 2
          const rr = tl[0].replace( / +/g , " rabit ");
          console.log(rr);
          
          const sl = rr.value.join("\n");
      
          r1.value=sl;
      
          ---------------------------------------------------
              TEST 3
          function searchSpace() {
              var text1 = tl[0];
              var space = " ";
      
              for (var i = 0; i<10; i++)
                  text1 = space.charAt(Math.floor(Math.random() * space.length));
      
              return rr;
      
      
      
          }
          */
  
  }
  
  main();  // this is the only executable thing in the "root" level of the code. it just calls the starting point and that's it.




