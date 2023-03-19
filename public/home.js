function Home(){
  const ctx = React.useContext(UserContext);
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <Card
    maxWidth = '100rem'
      bgcolor="danger"
      txtcolor='text-white'
      header="EH Bank"
      title="Welcome to EH Bank"
      text="Thank you for choosing EH Bank. Managing your banking needs has never been easier. Navigate to the area of your choice using the landing module located at the top of the page!"
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
