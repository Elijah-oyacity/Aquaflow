import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Search, Filter, Users, UserCheck, Settings, Eye, Edit, Trash2 } from "lucide-react"

export default function AdminPermissionsPage() {
  const roles = [
    {
      id: "ROLE-001",
      name: "Super Admin",
      description: "Full system access and control",
      users: 2,
      permissions: ["all"],
      color: "red",
    },
    {
      id: "ROLE-002",
      name: "Admin",
      description: "Administrative access with some restrictions",
      users: 5,
      permissions: ["customers", "technicians", "billing", "analytics"],
      color: "blue",
    },
    {
      id: "ROLE-003",
      name: "Manager",
      description: "Operational management and oversight",
      users: 8,
      permissions: ["customers", "technicians", "maintenance"],
      color: "green",
    },
    {
      id: "ROLE-004",
      name: "Support Agent",
      description: "Customer support and basic operations",
      users: 12,
      permissions: ["customers", "support"],
      color: "purple",
    },
  ]

  const users = [
    {
      id: "USER-001",
      name: "John Admin",
      email: "john.admin@aquaflow.com",
      role: "Super Admin",
      status: "Active",
      lastLogin: "2024-03-15 09:30",
      permissions: ["all"],
    },
    {
      id: "USER-002",
      name: "Sarah Manager",
      email: "sarah.manager@aquaflow.com",
      role: "Manager",
      status: "Active",
      lastLogin: "2024-03-15 08:45",
      permissions: ["customers", "technicians", "maintenance"],
    },
    {
      id: "USER-003",
      name: "Mike Support",
      email: "mike.support@aquaflow.com",
      role: "Support Agent",
      status: "Active",
      lastLogin: "2024-03-15 10:15",
      permissions: ["customers", "support"],
    },
    {
      id: "USER-004",
      name: "Emma Admin",
      email: "emma.admin@aquaflow.com",
      role: "Admin",
      status: "Inactive",
      lastLogin: "2024-03-10 16:20",
      permissions: ["customers", "technicians", "billing"],
    },
  ]

  const permissions = [
    { id: "customers", name: "Customer Management", description: "View and manage customer accounts" },
    { id: "technicians", name: "Technician Management", description: "Manage field technicians and assignments" },
    { id: "maintenance", name: "Maintenance", description: "Schedule and track maintenance activities" },
    { id: "billing", name: "Billing & Payments", description: "Manage billing and financial operations" },
    { id: "analytics", name: "Analytics", description: "Access to reports and analytics" },
    { id: "settings", name: "System Settings", description: "Configure system settings and preferences" },
    { id: "permissions", name: "User Permissions", description: "Manage user roles and permissions" },
    { id: "support", name: "Customer Support", description: "Handle customer support requests" },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800"
      case "Inactive":
        return "bg-gray-100 text-gray-800"
      case "Suspended":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Super Admin":
        return "bg-red-100 text-red-800"
      case "Admin":
        return "bg-blue-100 text-blue-800"
      case "Manager":
        return "bg-green-100 text-green-800"
      case "Support Agent":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold flex items-center">
            <Shield className="h-6 w-6 mr-2 text-red-600" />
            Permissions Management
          </h1>
          <p className="text-gray-600">Manage user roles, permissions, and access control</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Create Role</Button>
          <Button>Add User</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">27</div>
            <p className="text-xs text-muted-foreground">Across all roles</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <UserCheck className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">89% active rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Roles</CardTitle>
            <Shield className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">Permission levels</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Permissions</CardTitle>
            <Settings className="h-4 w-4 text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">System modules</p>
          </CardContent>
        </Card>
      </div>

      {/* Roles Management */}
      <Card>
        <CardHeader>
          <CardTitle>Role Management</CardTitle>
          <CardDescription>Define and manage user roles and their permissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <Card key={role.id} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{role.name}</CardTitle>
                      <CardDescription>{role.description}</CardDescription>
                    </div>
                    <Badge className={`bg-${role.color}-100 text-${role.color}-800`}>{role.users} users</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-2">Permissions:</p>
                      <div className="flex flex-wrap gap-2">
                        {role.permissions.includes("all") ? (
                          <Badge className="bg-red-100 text-red-800">All Permissions</Badge>
                        ) : (
                          role.permissions.map((perm) => (
                            <Badge key={perm} variant="outline" className="text-xs">
                              {permissions.find((p) => p.id === perm)?.name}
                            </Badge>
                          ))
                        )}
                      </div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Edit className="h-4 w-4 mr-1" />
                        Edit
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        <Eye className="h-4 w-4 mr-1" />
                        View Users
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* User Management */}
      <Card>
        <CardHeader>
          <CardTitle>User Management</CardTitle>
          <CardDescription>Manage individual user accounts and their access</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Search users..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Roles</SelectItem>
                <SelectItem value="super-admin">Super Admin</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                <SelectItem value="support">Support Agent</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          {/* Users Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">User</th>
                  <th className="text-left p-4 font-medium">Role</th>
                  <th className="text-left p-4 font-medium">Status</th>
                  <th className="text-left p-4 font-medium">Last Login</th>
                  <th className="text-left p-4 font-medium">Permissions</th>
                  <th className="text-left p-4 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-gray-600">{user.email}</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                    </td>
                    <td className="p-4 text-sm text-gray-600">{user.lastLogin}</td>
                    <td className="p-4">
                      <div className="flex flex-wrap gap-1">
                        {user.permissions.includes("all") ? (
                          <Badge className="bg-red-100 text-red-800 text-xs">All</Badge>
                        ) : (
                          user.permissions.slice(0, 2).map((perm) => (
                            <Badge key={perm} variant="outline" className="text-xs">
                              {permissions.find((p) => p.id === perm)?.name.split(" ")[0]}
                            </Badge>
                          ))
                        )}
                        {user.permissions.length > 2 && !user.permissions.includes("all") && (
                          <Badge variant="outline" className="text-xs">
                            +{user.permissions.length - 2}
                          </Badge>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Permission Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Permission Matrix</CardTitle>
          <CardDescription>Configure permissions for each role</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4 font-medium">Permission</th>
                  <th className="text-center p-4 font-medium">Super Admin</th>
                  <th className="text-center p-4 font-medium">Admin</th>
                  <th className="text-center p-4 font-medium">Manager</th>
                  <th className="text-center p-4 font-medium">Support Agent</th>
                </tr>
              </thead>
              <tbody>
                {permissions.map((permission) => (
                  <tr key={permission.id} className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <div className="font-medium">{permission.name}</div>
                        <div className="text-sm text-gray-600">{permission.description}</div>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <Switch checked={true} disabled />
                    </td>
                    <td className="p-4 text-center">
                      <Switch checked={["customers", "technicians", "billing", "analytics"].includes(permission.id)} />
                    </td>
                    <td className="p-4 text-center">
                      <Switch checked={["customers", "technicians", "maintenance"].includes(permission.id)} />
                    </td>
                    <td className="p-4 text-center">
                      <Switch checked={["customers", "support"].includes(permission.id)} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
