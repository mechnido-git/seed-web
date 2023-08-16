import React, { useContext } from 'react'
import { StoreContext } from '../../../store/StoreContext';

function UploadSection({event}) {

    const {userId} = useContext(StoreContext);
    const checkEnroll = (item , userId) => {
        let flag = false;
        
        item.enrolled?.forEach((item) => {
          
          if (item.userId === userId) flag = true;
        });
        return flag;

      };

      if(!checkEnroll(event, userId)) return null

  return (
    <div id='uploads'><h2>Uploads</h2><p>Nothing to upload</p></div>
  )
}

export default UploadSection