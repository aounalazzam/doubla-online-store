/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useContext } from "react";
import { AppDataContext } from "../context/AppDataContext";

function useAppData() {
  return useContext(AppDataContext);
}

export { useAppData };
