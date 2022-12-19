import { fetchAll, fetch } from "../../lib/postgres.js";
import {
  GETSUBCATEGORY,
  POSTSUBCATEGORY,
  PUTSUBCATEGORY,
  DELETESUBCATEGORY,
} from "./query.js";

const GET =  async ({subcategoryId=0}) => {
  try {
    return await fetchAll(GETSUBCATEGORY, [subcategoryId])

  } catch (error) {
    console.log(error);
  }
};


const POST = async ({sub_category_name,category_id}) => {
    try {
        return await fetch(POSTSUBCATEGORY, [sub_category_name,category_id])
    } catch (error) {
        console.log(error);
    }
}

const PUT = async ({subcategoryId},{ subcategory_name}) => {
  try {
    return await fetch(PUTSUBCATEGORY, [subcategory_name, subcategoryId]);
  } catch (error) {
    console.log(error);
  }
};

const DELETE = async ({ subcategoryId }) => {
  try {
    return await fetch(DELETESUBCATEGORY, [subcategoryId]);
  } catch (error) {
    console.log(error);
  }
};

export default {
  GET,
  POST,
  PUT,
  DELETE,
};
