const Logout = () => {
    localStorage.removeItem('token');
    window.location="/Home";
     
}

export default Logout;