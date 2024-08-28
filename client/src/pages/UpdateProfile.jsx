import { Link } from 'react-router-dom';

export default function UpdateProfile() {
  return (
    <div>
      <h2>Update Your Profile</h2>
      <div>
        <Link to="/update-username">
          <button>Update Username</button>
        </Link>
      </div>
      <div>
        <Link to="/update-password">
          <button>Update Password</button>
        </Link>
      </div>
      <div>
        <Link to="/update-email">
          <button>Update Email</button>
        </Link>
      </div>
    </div>
  );
}
