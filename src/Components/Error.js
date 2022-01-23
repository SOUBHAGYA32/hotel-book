import React from 'react';

function Error({error}) {
  return (
    <div className='error_msg'>
    {error}
    </div>
  );
}

export default Error;
