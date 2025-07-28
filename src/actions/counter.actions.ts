"use server";


export async function incrementCounter(prevState:any,formData: FormData):Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            const counter = Number(formData.get("counter")) + 1;
            resolve(counter);
        } catch (error: unknown) {
            if (error instanceof Error) {
                reject(error.message);
            } else {
                reject("Something went wrong");
            }
        }
    })
}

export async function decrementCounter(prevState:any,formData: FormData):Promise<number> {
    return new Promise((resolve, reject) => {
        try {
            const counter = Number(formData.get("counter")) - 1;
            resolve(counter);
        } catch (error: unknown) {
            if (error instanceof Error) {
                reject(error.message);
            } else {
                reject("Something went wrong");
            }
        }
    })

}

