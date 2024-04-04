import useForm from './UseForm';
import PropTypes from 'prop-types';

export default function Login({ setUsername, setMessage }) {
  const [formData, setFormData] = useForm({
    username: '',
    password: ''
  });

  async function login(e) {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log(response);

      if (!response.ok) {
        if (response.status === 401) {
          setMessage('Incorrect username or password.');
        }
        throw new Error(`${response.status} ${response.statusText}`);
      }

      setMessage(`Logged in as ${formData.username}.`);
      setUsername(formData.username);
    } catch (err) {
      console.error(err);
    }
  }

  async function register() {
    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        body: JSON.stringify(formData),
        credentials: 'include',
        headers: {
          'content-type': 'application/json'
        }
      });
      console.log('response', response);
      const data = await response.text();
      console.log('data', data);

      if (!response.ok) {
        setMessage(data);
        throw new Error(`${response.status} ${response.statusText}`);
      }

      setMessage(`Successfully registered as ${formData.username}. Logged in as ${formData.username}.`);
      setUsername(formData.username);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <form onSubmit={login}>
      <input name="username" placeholder="username" value={formData.username} onChange={setFormData} />
      <input name="password" placeholder="password" type="password" value={formData.password} onChange={setFormData} />
      <button>login</button>
      <button type="button" onClick={register}>register</button>
    </form>
  )
}

Login.propTypes = {
  setUsername: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired
}