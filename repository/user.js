import dbPool from "../utils/db.js";

export const getData = (id) => {
    if(!id){
        const sql = "SELECT user_id, name, email, password, address, created_at FROM users";
        return dbPool.query(sql)
    } else{
        const sql = "SELECT user_id, name, email, password, address, created_at FROM users WHERE user_id=?";
        const value = [id];
        return dbPool.query(sql, value)
    }
}

export const createData = (name, email, password, address) => {
    if (!name || !email || !password || !address) {
        throw new Error('All parameters (name, email, password, address) are required.');
    }
    let createdAt = new Date();
    const sql = "INSERT INTO users (name, email, password, address, created_at) VALUE(?, ?, ?, ?, ?)";
    const value = [name, email, password, address, createdAt];
    const result = dbPool.query(sql, value);
    return result;
}

export const updateData = (id, name, email, password, address) => {
    if (!id) {
        throw new Error('All parameters (id) are required.');
    }
    let updateAt = new Date();
    const sql = "UPDATE users SET name=?, password=?, email=?, address=?, update_at=? WHERE user_id=?;";
    const value = [name, password, email, address, updateAt, id];
    const result = dbPool.query(sql, value);

    return result;

}
export const deleteData = (id) => {
    if (!id) {
        throw new Error('All parameters (id) are required.');
    }
    let createdAt = new Date();
    const sql = "DELETE FROM users WHERE user_id=?;";
    const value = [id];
    const result = dbPool.query(sql, value);

    return result;

}