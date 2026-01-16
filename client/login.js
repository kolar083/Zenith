const form = document.getElementById('login-form');

if (form){
    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        
        const Username = document.getElementById('Username').value;
        const Password = document.getElementById('Password').value;

        try{
            const response = await fetch('http://localhost:3000/user/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Username,
                    Password
                })
            });
            const data = await response.text();

            if(response.ok){
                window.location.href='Plan.html';
                localStorage.setItem('token',data.token);
            }
            else{
                alert(data.message);
            }
        }
        catch(error){
            console.error(error);
            alert('Server error');
        }
    });
}