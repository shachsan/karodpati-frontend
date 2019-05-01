
export default{

   async getQuiz(){
        try {
            let response = await fetch('http://localhost:3000/api/quiz');
            let resJson = await response.json();
            return resJson;
        } catch (error) {
            console.log(error);
        }
    }
}

// module.exports = HttpRequests