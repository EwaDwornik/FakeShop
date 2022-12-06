const useLocalStorage = () => {
    // @ts-ignore
    const localStorageCart = JSON.parse(localStorage.getItem('cart'));
    const saveLocalStorageCart = (cart: any) =>
        localStorage.setItem('cart', JSON.stringify(cart));

    return [localStorageCart, saveLocalStorageCart];
};

export default useLocalStorage;
