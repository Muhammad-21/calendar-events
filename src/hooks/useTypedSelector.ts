import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

export const useTypeSeceltor : TypedUseSelectorHook<RootState> = useSelector