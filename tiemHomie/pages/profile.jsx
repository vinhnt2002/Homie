import React, { useEffect, useState } from 'react'
const initialState = {
  username: '',
  email: '',
  image: '',
}
const error_init = {
  username_err: '',
  email_err: '',
  image_err: '',
}
const profile = ({ user }) => {
  const [state, setState] = useState(initialState);
  const { username, email, image } = state;
  const [errors, setErrors] = useState(error_init);

  useEffect(() => {
    setState(user);
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newData: state }),
      });

      if (response.ok) {
        window.alert('Update successful~');
        // User profile updated successfully
        // You can perform any necessary actions here
      } else {
        const data = await response.json();
        window.alert('Something is wrong!!!');
        throw new Error(data.error);
      }
    } catch (error) {
      console.log(error);
      // Handle the error appropriately
    }
  };

  const handleInputChange = (event) => {
    let { name, value } = event.target;
    setState((state) => ({ ...state, [name]: value }));

  }

  return (
<div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-md-10">
              <div className="login_wrap">
                <div className="padding_eight_all bg-white">
                  <div className="heading_s1">
                    <h3>Thay đổi đại diện</h3>
                  </div>
                  <form method="post">
                    <div className="form-group mb-3">
                      <label htmlFor='username'>Username</label>
                      <input
                        onChange={handleInputChange}
                        type="text"
                        required
                        className="form-control"
                        name="username"
                        value={state.username}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor='email'>Email</label>
                      <input
                        onChange={handleInputChange}
                        type="email"
                        required
                        className="form-control"
                        name="email"
                        value={state.email}
                      />
                    </div>
                    <div className="form-group mb-3">
                    <label htmlFor='image'>Image URL</label>
                      <input
                        onChange={handleInputChange}
                        className="form-control"
                        required
                        type="text"
                        name="image"
                        value={state.image}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-fill-out btn-block"
                        name="register"
                      >
                        Thay đổi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default profile

export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/users'); // Replace with your API route URL
  let user = await response.json();
  return {
    props: { user },
  };
}