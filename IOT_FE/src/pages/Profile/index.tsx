import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import imageDuc from '../../assets/images/avatar-duc.jpg';
import imageQuy from '../../assets/images/avatar-quy.jpg';
// import imageThang from '../../assets/images/avatar-thang.jpg'
const Profile: React.FC = () => {
    return (
        <div className="container-fluid">
            <div className="profile-cards">
                {/* Profile Card 1 */}
                <div className="profile-card">
                    <div className="d-flex flex-column align-items-center">

                        <img
                            src={imageQuy}
                            alt="Profile"
                            className="profile-img"
                        />
                        <h2 className="name">Lê Đình Quý</h2>
                        <p className="title">D21CNPM6 <strong>PTIT</strong></p>
                        <p className="email">Email: <strong >Viequy0703@gmail.com</strong></p>
                        <div className="info">
                            <p className="info-item"><strong>B21DCCN636</strong><br />Mã sinh viên</p>
                            <p className="info-item"><strong>0382735268</strong><br />Số điện thoại</p>
                        </div>
                        <div className="d-flex">
                            <a href="https://drive.google.com/drive/folders/19JNtrktEdKKiv-2MZLsyGWe5EG7mhIhF?usp=drive_link" target="_blank" className="facebook" rel="noopener noreferrer" >
                                <i className="fas fa-file-word" style={{ fontSize: '40px', marginRight: '16px' }}></i>
                            </a>
                            <a href="https://drive.google.com/drive/folders/19JNtrktEdKKiv-2MZLsyGWe5EG7mhIhF?usp=drive_link" target="_blank" className="instagram" rel="noopener noreferrer">
                                <i className="fas fa-file-code" style={{ fontSize: '40px', marginRight: '16px' }}></i>
                            </a>
                            <a href="https://github.com/VieQ73" target="_blank" className="github" rel="noopener noreferrer">
                                <i className="fab fa-github" style={{ fontSize: '40px' }}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
