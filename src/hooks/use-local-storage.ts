import { useEffect, useState } from "react";

const LOCAL_STORAGE_CHANGE_EVENT = "local-storage-change";

export default function useLocalStorage<T>(key: string, defaultValue: T) {
    const [value, setValue] = useState<T>(() => {
        if (typeof window === "undefined") {
            return defaultValue;
        }

        try {
            const stored = window.localStorage.getItem(key);
            return stored ? (JSON.parse(stored) as T) : defaultValue;
        } catch {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        try {
            window.localStorage.setItem(key, JSON.stringify(value));
            window.dispatchEvent(
                new CustomEvent(LOCAL_STORAGE_CHANGE_EVENT, {
                    detail: { key, value },
                })
            );
        } catch {
            // ignore write errors
        }
    }, [key, value]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        function handleStorageChange(event: Event) {
            if (event instanceof StorageEvent) {
                if (event.key !== key) {
                    return;
                }

                if (event.newValue == null) {
                    setValue(defaultValue);
                    return;
                }

                try {
                    setValue(JSON.parse(event.newValue));
                } catch {
                    setValue(defaultValue);
                }

                return;
            }

            if (event instanceof CustomEvent) {
                const detail = event.detail as { key: string; value: T } | undefined;
                if (!detail || detail.key !== key) {
                    return;
                }

                setValue(detail.value);
            }
        }

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener(LOCAL_STORAGE_CHANGE_EVENT, handleStorageChange as EventListener);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener(LOCAL_STORAGE_CHANGE_EVENT, handleStorageChange as EventListener);
        };
    }, [key, defaultValue]);

    return [value, setValue] as const;
}
