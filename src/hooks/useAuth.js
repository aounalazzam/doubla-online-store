/**
 * @license
 * This Source Code Is Written By Aoun Alazzam Under MIT License
 */

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function useAuth() {
  return useContext(AuthContext);
}

export { useAuth };
