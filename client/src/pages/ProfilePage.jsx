import { useAuth } from "../context/AuthContext";
import "../styles/Form.css";

function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return <div className="container">Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Welcome back, {user.name || "User"}!</h2>
      <p>
        <strong>Email:</strong> {user.email || "N/A"}
      </p>
      <p>
        <strong>Role:</strong> {user.role || "user"}
      </p>
      <p>
        <strong>Joined:</strong>{" "}
        {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
      </p>
    </div>
  );
}

export default ProfilePage;
