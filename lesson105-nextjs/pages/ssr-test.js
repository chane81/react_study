import Layout from '../components/Layout';
import axios from 'axios';

class SSRTest extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('test');
        return {
            users: response.data,
            from: req ? 'server' : 'client'
        }
    }

    render() {
        const { users } = this.props;

        const userList = users.map(
            user => <li key={user.id}>{user.username}</li>
        )

        return (
            <Layout>
                {this.props.from} 에서 실행됨
                <ul>
                    {userList}
                </ul>
            </Layout>
        );
    }
}

export default SSRTest;