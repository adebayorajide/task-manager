 import { useState } from "react";
import Menu from "../Menu"
 import pics from "../images/avatar.jpg"
 function Profile() {
  const [avatar, setAvatar] = useState()
  const [url, setUrl] = useState(pics)

  function handleUpload() {
    
  }
  return (
    <div className="container">
      <aside>
        <Menu />
      </aside>
      <div className="profile">
        <header className="header">
          <h3>My Profiles</h3>
          <button className="edit_btn">Edit Profile</button>
        </header>
        <div className="avatar">
          <img src={url} alt="avatar" />
        </div>
        <div>
          <input type="file" name="file" id="file" />
        </div>
        <div className="upload">
          <button>Upload Image</button>
        </div>

        <div className="bio">
          Bio <br />
        </div>
        <div className="bio">
          Skills <br />
        </div>
        <div className="bio">
          Hobbies <br />
        </div>
      </div>
    </div>
  );
}

export default Profile