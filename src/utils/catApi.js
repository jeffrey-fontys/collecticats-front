export default class CatApi {
    API_URL;

    constructor() {
        this.API_URL = "http://localhost:8080/cat-service/cats";
    }

    async GetAll() {
        let res = await
        fetch(this.API_URL, {
            method: "GET"
        });

        return ((res.status === 200) ? res.json() : res);
    }
}
