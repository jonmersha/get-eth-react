

const HeaderComponent = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      {/* Search Bar */}
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          placeholder="Search..."
          style={{ padding: '8px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button style={{ ...buttonStyle, marginLeft: '10px' }}>Search</button>
      </div>

      {/* Contact Information */}
      <div style={{ margin: '10px 0', fontSize: '14px', color: '#333' }}>
        <p>Email: support@myapp.com</p>
        <p>Mobile: +1 (123) 456-7890</p>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  backgroundColor: '#007BFF',
  color: '#fff',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};



export default HeaderComponent;