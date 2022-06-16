export default class CatApi {

    async GetAll() {
        let res = await
        fetch(process.env.REACT_APP_API_URL + "/cat-service/cats", {
            method: "GET"
        });

        return ((res.status === 200) ? res.json() : res);
    }
}
