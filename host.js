<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="login-container">
    <h2>Login to Your blahblahjuice&nbsp; Account</h2>
    <form id="loginForm">
      <input type="email" id="email" placeholder="Email" required>
	   <input type="text" id="otp" placeholder="Enter OTP" required>
       <input type="password" id="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <p class="error-message" id="errorMessage"></p>
    </form>
    <div class="social-login">
      <button id="googleLogin">Login with Google</button>
      <button id="facebookLogin">Login with Facebook</button>
		<!-- Add a dropdown menu for selecting OTP delivery method -->
<select id="otpDeliveryMethod" required>
  <option value="" disabled selected>Select OTP Delivery Method</option>
  <option value="sms">SMS</option>
  <option value="email">Email</option>
  <option value="authenticator">Authenticator App</option>
</select>

    </div>
</div>

  <script src="script.js"></script>
</body>
</html>
