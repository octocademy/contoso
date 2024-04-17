/**
 * ValidationHelper
 */
export class ValidationHelper {

    public static validate = (address: string): boolean => {
        const e_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return e_regex.test(address);
    }

}