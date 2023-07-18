import { useSelector } from "react-redux"
import { selectUserDocs } from "../../store/user/user.selector"
import { Fragment } from "react";



export const UserDashboard = () => {
    const userDoc = useSelector(selectUserDocs); 

    return (
        <Fragment>
          {Object.keys(userDoc).map((email) => {
            const userInfo = userDoc[email];
            return (
              <div>{email}</div>
             
            );
          })}
        </Fragment>
      );
}