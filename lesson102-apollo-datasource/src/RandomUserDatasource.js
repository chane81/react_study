import { RESTDataSource } from 'apollo-datasource-rest';

class RandomUserDataSource extends RESTDataSource {
    constructor () {
        super();
        this.baseURL = "http://api.randomuser.me/"
    }

    getPerson = async () => {
        const { results } = await this.get("", { ttl: 5 });
        console.log(results);
        return results;
    }

    get getResult() {
        return 'test';
    }

    res = 'test';
}

export default new RandomUserDataSource();