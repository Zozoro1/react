import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const PassUpdate = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');
    const handleSubmit = async (e) => {
        const item = {
            username,
            password,
            newpassword,
            confirmpassword
        }
        console.log(item)
        e.preventDefault();
        axios.post("http://localhost:8080/passchange", item,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(res => {
                if (res.data === "OK") {
                    console.error("パスワード変更しました。")
                }
            }
            )
            .catch(error => {
                console.error("error");
            })

    };

    return (
        <div className="container ">
            <form onSubmit={handleSubmit}>
                <div className="box-Width-500 mx-auto my-5 ">
                    <div className="form-group mx-auto shadow  ">
                        <legend className="text-center my-4 font-weight-bold text-primary h3 ">
                            新しいパスワード入力してください。
                        </legend>

                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">ユーザ ー名:</label>
                            <input type="text" id="username" className="form-control" placeholder="ユーザ　ID" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">パスワード: </label>
                            <input type="password" value={password} name="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="パスワードを入力してください" />
                        </div>
                        <div className="mb-3 mx-5 mt-4">
                            <label className="form-label  " for="">新しいパスワード: </label>
                            <input type="newpassword" value={newpassword} name="newpassword" className="form-control" onChange={(e) => setnewPassword(e.target.value)} placeholder="新しいパスワード" />
                        </div>
                        <div className="mb-3 mx-5">
                            <label className="form-label  " for="">もう一度パスワードを入力してください</label>
                            <input type="password" value={confirmpassword} name="confirmPassword" className="form-control " placeholder="新しいパスワードと同じパスワード入力してください。" onChange={(e) => setConfirmpassword(e.target.value)} />
                        </div>
                        <div className="row d-flex justify-content-center mt-5">
                            <button
                                type="button-submit" className="btn btn-success col-4 mb-5 ">
                                保存
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default PassUpdate;
