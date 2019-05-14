
export default{

   async getQuiz(query){
        try {
            let response = await fetch('http://localhost:3000/api/quiz',{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(query)
            });
            let resJson = await response.json();
            return resJson;
        } catch (error) {
            console.log(error);
        }
    }
}

// module.exports = HttpRequests
//db.quizes.find({"subcategory":{$in:["Geography", "sports"]}})