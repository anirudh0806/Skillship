function Search() {
    let search = document.getElementById('txt').value;
    console.log(typeof(search));
    if(isNaN(search))
        window.alert("Wrong input, enter a number");
    else
        data(search);
}
async function data(search) {
    try {
        console.log("yes");
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/'+search);
        document.getElementById("Title").innerHTML="Title:"+resp.data.title;
        document.getElementById("Body").innerHTML="Body:"+resp.data.body;
    } catch (err) {
        console.error(err);
    }
};
function Search1() {
    let search = document.getElementById('txt1').value;
    console.log(typeof(search));
    if(isNaN(search))
        window.alert("Wrong input, enter a number");
    else
        data1(search);
}
async function data1(search) {
    try {
        output=``;
        const resp = await axios.get('https://jsonplaceholder.typicode.com/posts/'+search+"/comments");
        resp.data.forEach(element => {
            output += `
                <div class="child">
                    <p id="Name">Name:`+element.name+`</p>
                    <p id="Email">Email:`+element.email+`</p>
                    <p id="Body">Body:`+element.body+`</p>
                    <br>
                </div>`;
        });
        
        document.getElementById("results").innerHTML=output;
    } catch (err) {
        console.error(err);
    }
};
    