import url from "node:url";
import add from "../utils/addTask.js";
import { print, printByid } from "../utils/print.js";
import { deleteed } from "../utils/delete.js";
import { update } from "../utils/update.js";
import { filteredData } from "../utils/filter.js";

function router(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Or your specific domain
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // 2. Handle the "Preflight" request (OPTIONS)
  if (req.method === "OPTIONS") {
    res.statusCode = 204; // No Content
    res.end();
    return;
  }

  let parsed = url.parse(req.url, true);
  let pathname = parsed.pathname;
  let query = parsed.query;
  if (req.method === "POST") {
    res.statusCode = 200;
    if (pathname == "/tasks") {
      if (query.name != undefined) {
        add.addTask(query);
        res.setHeader("content-type", "text/plain");
        res.end(`${JSON.stringify(query)} task added`);
      } else {
        res.setHeader("content-type", "text/plain");
        res.end(`${JSON.stringify(query)} you did not insert a name`);
      }
    } else {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain");
      res.end(`page is not found try /tasks`);
    }
  } else if (req.method === "GET") {
    if (query.id != undefined) {
      let data = printByid(query.id);
      res.setHeader("content-type", "text/plain");
      res.end(data);
    } else if (query.status != undefined) {
      let data = filteredData(query.status);
      res.setHeader("content-type", "text/plain");
      res.end(data);
    } else if (
      pathname == "/tasks" &&
      query.id == undefined &&
      query.status == undefined
    ) {
      res.statusCode = 200;
      let data = print();
      res.setHeader("content-type", "text/plain");
      res.end(data);
    } else {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain");
      res.end(`page is not found try /tasks`);
    }
  } else if (req.method === "PUT") {
    res.statusCode = 200;
    if (pathname == "/tasks") {
      if (query.id) {
        if (query.update) {
          let str = update(query.id, query.update);
          res.setHeader("content-type", "text/plain");
          res.end(str);
        } else {
          res.statusCode = 404;
          res.setHeader("content-type", "text/plain");
          res.end("please enter the updated data");
        }
      } else {
        res.statusCode = 404;
        res.setHeader("content-type", "text/plain");
        res.end("please enter the id of the task");
      }
    } else {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain");
      res.end("page is not found");
    }
  } else if (req.method === "DELETE") {
    if (pathname == "/tasks") {
      if (query.id) {
        res.statusCode = 200;
        deleteed(query.id);
        res.setHeader("content-type", "text/plain");
        res.end("the task have been deleted");
      } else {
        res.statusCode = 404;
        res.setHeader("content-type", "text/plain");
        res.end("please enter the id of the task");
      }
    } else {
      res.statusCode = 404;
      res.setHeader("content-type", "text/plain");
      res.end("page is not found");
    }
  } else {
    res.statusCode = 404;
    res.setHeader("content-type", "text/plain");
    res.end("page is not found");
  }
}

export default { router };
