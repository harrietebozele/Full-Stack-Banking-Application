function priceFormatter(cell, row){
    return '$' + Number(cell).toFixed(2);
  }
  
  function Table() {
    //const [data, setData] = React.useState([]); 
    const [data, setData] = React.useState([]);
    const ctx = React.useContext(UserContext); 
    const [balance, setBalance] = React.useState('');
    const { user } = ctx;
    
  
    React.useEffect(() => {
        // fetch all accounts from API (/public/index.js)
        /*fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data[0]);
                setData(data);                
            }); 
            */
            
            
            

            fetch(`/account/find/${ctx.user.email}`)
            .then(response=>response.json())
              .then(data=>{
                //ctx.user = data[0];
                //setBalance(data[0].balance)
                setData(data);
                console.log(data);
            })
           
            
            
            
            

            
            
            

            
              
          
    }, []);
  
    return (
      <BootstrapTable
          data={data}
          bodyStyle={{ border: "none" }}
          tableStyle={{ border: "none" }}
          headerStyle={{ border: "none !important" }}
          striped
          version="3"
          height="200"
          width="800"
      >
        <TableHeaderColumn isKey dataField={'name'}>
          Name
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'email'}>
          Email
        </TableHeaderColumn>
        <TableHeaderColumn dataField={'balance'} dataFormat={priceFormatter}>
          Balance
        </TableHeaderColumn>
      </BootstrapTable>
    );
  }
  
  function AllData() {
    return (
      <>
        <Card
          bgcolor="danger"
          txtcolor='black'
          header={'Account Summary'}
          body={<Table/>}
        />
      </>
    );
  }
