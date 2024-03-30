import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import { API_BASE_URL, CLOUD_NAME, UPLOAD_PRESET } from "../utils/constants";

export const getUser = async (id: string) => {
    try {
        const { data } = await axios.get(`${API_BASE_URL}/users/${id}`);
        return data;
    } catch (e) { }
};

export const getUsersBySearch = async (search: string) => {
    try {
        const { data } = await axiosWithAuth.get(`/users/?search=${search}`);
        return data;
    } catch (e) { }
}

export const updateUser = async (id: string, user: any) => {
    try {
        const { data } = await axiosWithAuth.put(`/users/${id}`, user);
        return data;
    } catch (e) { }
};

// IMAGES
export const uploadImages = async (images: any) => {
    try {
        const results: any[] = []

        for (let i = 0; i < images.length; i++) {
            const formData = new FormData();
            formData.append('file', images[i]);
            formData.append('upload_preset', UPLOAD_PRESET!);
            const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, formData);
            results.push(data.secure_url);
        }

        return results;
    } catch (e) { }
}

export const uploadUserImage = async (image: string) => {
    try {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', UPLOAD_PRESET!);
        const { data } = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, formData);
        return data.secure_url
    } catch (e) { }
}

// FRIENDS
export const getFriends = async (id: string) => {
    const { data } = await axiosWithAuth.get(`/users/${id}/friend`);
    return data;
}

export const setFriend = async (id: string, otherId: string, status: boolean) => {
    const { data } = await axiosWithAuth.put(`/users/${id}/friend`, {
        otherId,
        status
    });
    return data;
}

export const checkFriend = async (userId: string, id: string) => {
    const { data } = await axiosWithAuth.get(`/users/${userId}`);
    const friends: string[] = data.user.friends;
    if (!friends) return false;

    const isFriend = friends.includes(id);
    return isFriend;
}

// REQUESTS
export const getRequests = async (id: string) => {
    const { data } = await axiosWithAuth.get(`/users/${id}/request`);
    return data;

}

export const setRequest = async (id: string, otherId: string, status: boolean) => {
    const { data } = await axiosWithAuth.put(`/users/${id}/request`, {
        otherId,
        status
    });
    return data;
}

// BLOCK
export const getBlocked = async (id: string) => {
    const { data } = await axiosWithAuth.get(`/users/${id}/block`);
    return data;
}

export const setBlocked = async (id: string, otherId: string, status: boolean) => {
    const { data } = await axiosWithAuth.put(`/users/${id}/block`, {
        otherId,
        status
    });
    return data;
}

export const checkBlock = async (userId: string, id: string) => {
    const { data } = await axiosWithAuth.get(`/users/${userId}`);
    const blocked: string[] = data.user.blocked;
    if (!blocked) return false;

    const isBlocked = blocked.includes(id);
    return isBlocked;
}