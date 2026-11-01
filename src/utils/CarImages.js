export const getCarImage = (car) => {
    if (!car || !car.image) {
        return "";
    }

    const image = car.image;

    if (image.startsWith("http://") ||
        image.startsWith("https://")) {
        return image;
    }

    return `${process.env.PUBLIC_URL}/${image.replace(/^\/+/, "")}`;
};