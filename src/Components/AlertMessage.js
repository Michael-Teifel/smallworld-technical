function AlertMessage({message, messageType}) {

  let className; 
  if(messageType === 'success') {
    className = 'alert-message success';
  }

  if(messageType === 'error') {
    className = 'alert-message error';
  }

  return <div className={className}>{message}</div>
}

export default AlertMessage;