const getMessageError = (error: boolean, messageError: string): string | null => {
    if (!error) return null;

    return messageError;
};

export default getMessageError;
