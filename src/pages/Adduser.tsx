import { useState } from "react";
import { ArrowLeft, Search, Eye, Edit, Trash2, Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useNavigate } from "react-router-dom";

// ------------------ MOCK DATA ------------------
const mockUsers = [
  { id: 1, name: "Rohit Sharma", email: "rohit@example.com", number: "9876543210", type: "User" },
  { id: 2, name: "Aditi Varma", email: "aditi@example.com", number: "9988776655", type: "Admin" },
  { id: 3, name: "Rahul Jain", email: "rahul@example.com", number: "9123456780", type: "Editor" },
  { id: 4, name: "Nisha Patil", email: "nisha@example.com", number: "9090909090", type: "User" },
];

const Adduser = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [users, setUsers] = useState(mockUsers);

  const [viewUser, setViewUser] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editUser, setEditUser] = useState<any>(null);

  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    type: "",
  });

  // FILTER + SEARCH
  const filteredUsers = users.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === "All" || u.type === filter;
    return matchesSearch && matchesFilter;
  });

  // ADD USER
  const handleAdd = () => {
    const id = users.length + 1;
    setUsers([...users, { id, ...newUser }]);

    setNewUser({ name: "", email: "", number: "", password: "", type: "" });
    setShowAddModal(false);
  };

  // UPDATE USER
  const handleUpdate = () => {
    setUsers((prev) =>
      prev.map((u) => (u.id === editUser.id ? editUser : u))
    );
    setEditUser(null);
  };

  // DELETE USER
  const handleDelete = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins] pb-24">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] px-4 py-4 text-white shadow-xl sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-full"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <h1 className="text-xl font-semibold tracking-wide flex-1">
            User Management
          </h1>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="p-4 space-y-4">

        {/* SEARCH */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 rounded-xl bg-white shadow-sm border border-gray-200"
          />
        </div>

        {/* FILTERS */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {["All", "User", "Admin", "Editor"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-full text-sm border transition ${
                filter === type
                  ? "bg-[#0E4C92] text-white shadow-md"
                  : "bg-white text-[#0E4C92] border-[#0E4C92]/30 hover:bg-[#0E4C92]/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* USERS LIST */}
        <div className="space-y-3">
          {filteredUsers.map((user) => (
            <Card
              key={user.id}
              className="p-4 rounded-2xl bg-white shadow-md hover:shadow-xl border border-gray-100 transition"
            >
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="" />
                  <AvatarFallback className="bg-[#0E4C92]/20 text-[#0E4C92] font-semibold">
                    {user.name[0]}
                  </AvatarFallback>
                </Avatar>

                {/* USER INFO */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm">{user.name}</h3>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                  <Badge className="mt-1 bg-[#0E4C92]/10 text-[#0E4C92] px-2 py-0.5 rounded-full text-[10px]">
                    {user.type}
                  </Badge>
                </div>

                {/* ACTION BUTTONS - FIXED ALIGNMENT */}
                <div className="flex gap-2 shrink-0">
                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => setViewUser(user)}
                  >
                    <Eye className="h-4 w-4 text-[#0E4C92]" />
                  </Button>

                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => setEditUser({ ...user })}
                  >
                    <Edit className="h-4 w-4 text-green-600" />
                  </Button>

                  <Button
                    size="icon"
                    variant="outline"
                    className="rounded-lg"
                    onClick={() => handleDelete(user.id)}
                  >
                    <Trash2 className="h-4 w-4 text-red-600" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500 py-10">No users found</p>
        )}
      </main>

      {/* FLOATING ADD BUTTON */}
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-2xl bg-[#1C6DD0] hover:bg-[#155AB0] text-white z-50 animate-pulse"
        onClick={() => setShowAddModal(true)}
      >
        <Plus className="h-6 w-6" />
      </Button>

      {/* ---------------- VIEW USER MODAL ---------------- */}
      {viewUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative border">
            <button className="absolute top-3 right-3" onClick={() => setViewUser(null)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <h2 className="text-xl font-semibold text-[#0E4C92] mb-4">User Details</h2>

            <p><strong>Name:</strong> {viewUser.name}</p>
            <p><strong>Email:</strong> {viewUser.email}</p>
            <p><strong>Number:</strong> {viewUser.number}</p>
            <p><strong>Type:</strong> {viewUser.type}</p>
          </div>
        </div>
      )}

      {/* ---------------- EDIT USER MODAL ---------------- */}
      {editUser && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative border">

            <button className="absolute top-3 right-3" onClick={() => setEditUser(null)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <h2 className="text-xl font-semibold text-[#0E4C92] mb-4">Edit User</h2>

            <div className="space-y-4">

              <Input
                placeholder="Name"
                value={editUser.name}
                onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                className="rounded-xl"
              />

              <Input
                placeholder="Email"
                value={editUser.email}
                onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}
                className="rounded-xl"
              />

              <Input
                placeholder="Phone Number"
                value={editUser.number}
                onChange={(e) => setEditUser({ ...editUser, number: e.target.value })}
                className="rounded-xl"
              />

              <select
                className="w-full p-3 border rounded-xl"
                value={editUser.type}
                onChange={(e) => setEditUser({ ...editUser, type: e.target.value })}
              >
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>

              <Button
                className="w-full bg-[#0E4C92] text-white rounded-xl hover:bg-[#0C3F78]"
                onClick={handleUpdate}
              >
                Update User
              </Button>
            </div>

          </div>
        </div>
      )}

      {/* ---------------- ADD USER MODAL ---------------- */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full relative border">

            <button className="absolute top-3 right-3" onClick={() => setShowAddModal(false)}>
              <X className="h-5 w-5 text-gray-600" />
            </button>

            <h2 className="text-xl font-semibold text-[#0E4C92] mb-4">Add New User</h2>

            <div className="space-y-4">
              <Input
                placeholder="Name"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                className="rounded-xl"
              />

              <Input
                placeholder="Email"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                className="rounded-xl"
              />

              <Input
                placeholder="Password"
                type="password"
                value={newUser.password}
                onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                className="rounded-xl"
              />

              <Input
                placeholder="Phone Number"
                value={newUser.number}
                onChange={(e) => setNewUser({ ...newUser, number: e.target.value })}
                className="rounded-xl"
              />

              <select
                className="w-full p-3 border rounded-xl"
                value={newUser.type}
                onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
              >
                <option value="">Select Type</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
                <option value="Editor">Editor</option>
              </select>

              <Button
                className="w-full bg-[#0E4C92] text-white rounded-xl hover:bg-[#0C3F78]"
                onClick={handleAdd}
              >
                Submit
              </Button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Adduser;
