import PropTypes from 'prop-types';

//====================//
//===== variable =====//
//====================//

const {REACT_APP_ADMIN_ACL} = process.env;


const UsersTable = ({users}) => {

    return (
        <div className="container-fluid p-0">

            <div className="row g-3">

                <div className="col-24">

                    <div className="table-responsive remove-scrollbar">

                        <table className="table">

                            <thead className="table-primary">
                            <tr>
                                <th className="fs-5 fw-bold text-center text-truncate">نام و نام خانوادگی</th>
                                <th className="fs-5 fw-bold text-center text-truncate">ایمیل</th>
                                <th className="fs-5 fw-bold text-center text-truncate">نقش</th>
                            </tr>
                            </thead>

                            <tbody className="table-white">
                            {
                                users &&
                                users?.map((user, index) => (
                                        <tr key={index}>
                                            <td className="fs-5 text-center text-truncate">{user?.name}</td>
                                            <td className="fs-5 text-center text-truncate">{user?.email}</td>
                                            <td className="fs-5 text-center text-truncate">
                                            <span className={`badge w-max-content fs-6 fw-bold ${user?.acl === REACT_APP_ADMIN_ACL ? 'bg-success' : 'bg-danger'} text-white p-2 mx-auto`}>
                                              {user.acl === REACT_APP_ADMIN_ACL ? 'مدیر' : 'کاربر'}
                                            </span>
                                            </td>
                                        </tr>
                                    )
                                )
                            }
                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </div>
    );
};

UsersTable.prototype = {
    users: PropTypes.array
};

export default UsersTable;
