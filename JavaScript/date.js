					//assigning value by id 
					const dateDiv = document.getElementById("date-div");

					//function to add date 
					function myDateFunction() {
					    const now = new Date();
					    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
					    const nowStr = now.toLocaleString("en-US", options);
					    dateDiv.innerHTML = nowStr;
					}

					//recalling the function
					myDateFunction();