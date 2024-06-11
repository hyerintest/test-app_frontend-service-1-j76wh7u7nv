const KEY = 'board';

export default {
  list() {
    const raw = localStorage.getItem(KEY) ?? [];
    let rst;
    try {
      rst = JSON.parse(raw);
    } catch (e){
      rst = [];
    }
    return rst;
  },
  create(p) {
    const list = this.list();
    const param = {...p, id: Math.random().toString(36).substring(7), createDate: new Date()}
    list.push(param);
    localStorage.setItem(KEY, JSON.stringify(list))
  },
  detail(cid) {
    const list = this.list();
    const rst = list.find(i => i.id === cid);
    return rst;
  },
  edit(cid, p) {
    const list = this.list();
    const rst = list.find(i => i.id === cid);
    rst.title = p.title;
    rst.contents = p.contents;
    localStorage.setItem(KEY, JSON.stringify(list))
  },
  delete(cid) {
    const list = this.list();
    const rst = list.filter(i => i.id !== cid);
    localStorage.setItem(KEY, JSON.stringify(rst))
  },
}
