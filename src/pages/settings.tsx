import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Wallet, 
  Bell, 
  CreditCard,
  Globe,
  Lock,
  Save,
  Eye,
  EyeOff,
  DollarSign
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/layout/header';
import { useAuth } from '@/contexts/auth-context';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { user, connectWallet } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    loanUpdates: true,
    marketingEmails: false,
    twoFactorAuth: false,
    biometricAuth: false,
    language: 'en',
    currency: 'USD',
    timezone: 'UTC'
  });

  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    country: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleSaveProfile = async () => {
    toast.success('Profile updated successfully!');
  };

  const handleSaveSettings = async () => {
    toast.success('Settings saved successfully!');
  };

  const handleWalletConnect = async () => {
    setIsConnecting(true);
    const success = await connectWallet();
    setIsConnecting(false);
    
    if (success) {
      toast.success('Wallet connected successfully!');
    } else {
      toast.error('Failed to connect wallet');
    }
  };

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const updateProfile = (key: string, value: string) => {
    setProfileData(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-16 bg-gradient-to-br from-teal-50/50 via-blue-50/50 to-green-50/50 dark:from-teal-950/10 dark:via-blue-950/10 dark:to-green-950/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold mb-2">Settings</h1>
            <p className="text-muted-foreground">Manage your account preferences and security settings</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={profileData.name}
                          onChange={(e) => updateProfile('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={profileData.email}
                          onChange={(e) => updateProfile('email', e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={profileData.phone}
                          onChange={(e) => updateProfile('phone', e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Input
                          id="address"
                          value={profileData.address}
                          onChange={(e) => updateProfile('address', e.target.value)}
                          placeholder="Enter your address"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={profileData.city}
                          onChange={(e) => updateProfile('city', e.target.value)}
                          placeholder="Enter your city"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select value={profileData.country} onValueChange={(value) => updateProfile('country', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="br">Brazil</SelectItem>
                            <SelectItem value="ke">Kenya</SelectItem>
                            <SelectItem value="in">India</SelectItem>
                            <SelectItem value="mx">Mexico</SelectItem>
                            <SelectItem value="ph">Philippines</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <Button onClick={handleSaveProfile} className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Security Tab */}
              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wallet className="h-5 w-5 mr-2" />
                      Wallet Connection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
                          <Wallet className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium">Blockchain Wallet</p>
                          <p className="text-sm text-muted-foreground">
                            {user?.walletAddress ? 
                              `Connected: ${user.walletAddress.slice(0, 6)}...${user.walletAddress.slice(-4)}` :
                              'No wallet connected'
                            }
                          </p>
                        </div>
                      </div>
                      <Button 
                        onClick={handleWalletConnect}
                        disabled={isConnecting}
                        variant={user?.walletAddress ? "outline" : "default"}
                      >
                        {isConnecting ? 'Connecting...' : user?.walletAddress ? 'Reconnect' : 'Connect Wallet'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Password & Authentication
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? 'text' : 'password'}
                            value={profileData.currentPassword}
                            onChange={(e) => updateProfile('currentPassword', e.target.value)}
                            placeholder="Enter current password"
                            className="pr-10"
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-3 text-muted-foreground hover:text-primary"
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={profileData.newPassword}
                          onChange={(e) => updateProfile('newPassword', e.target.value)}
                          placeholder="Enter new password"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={profileData.confirmPassword}
                          onChange={(e) => updateProfile('confirmPassword', e.target.value)}
                          placeholder="Confirm new password"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Two-Factor Authentication</p>
                          <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                        </div>
                        <Switch
                          checked={settings.twoFactorAuth}
                          onCheckedChange={(checked) => updateSetting('twoFactorAuth', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Biometric Authentication</p>
                          <p className="text-sm text-muted-foreground">Use fingerprint or face recognition</p>
                        </div>
                        <Switch
                          checked={settings.biometricAuth}
                          onCheckedChange={(checked) => updateSetting('biometricAuth', checked)}
                        />
                      </div>
                    </div>

                    <Button onClick={handleSaveProfile} className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Update Security Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Notifications Tab */}
              <TabsContent value="notifications" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2" />
                      Notification Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Email Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive updates via email</p>
                        </div>
                        <Switch
                          checked={settings.emailNotifications}
                          onCheckedChange={(checked) => updateSetting('emailNotifications', checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">SMS Notifications</p>
                          <p className="text-sm text-muted-foreground">Receive text message alerts</p>
                        </div>
                        <Switch
                          checked={settings.smsNotifications}
                          onCheckedChange={(checked) => updateSetting('smsNotifications', checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Loan Status Updates</p>
                          <p className="text-sm text-muted-foreground">Notifications about loan approvals and payments</p>
                        </div>
                        <Switch
                          checked={settings.loanUpdates}
                          onCheckedChange={(checked) => updateSetting('loanUpdates', checked)}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="font-medium">Marketing Emails</p>
                          <p className="text-sm text-muted-foreground">Receive promotional content and updates</p>
                        </div>
                        <Switch
                          checked={settings.marketingEmails}
                          onCheckedChange={(checked) => updateSetting('marketingEmails', checked)}
                        />
                      </div>
                    </div>

                    <Button onClick={handleSaveSettings} className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Preferences Tab */}
              <TabsContent value="preferences" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Regional Preferences
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="language">Language</Label>
                        <Select value={settings.language} onValueChange={(value) => updateSetting('language', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select language" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="en">English</SelectItem>
                            <SelectItem value="es">Español</SelectItem>
                            <SelectItem value="pt">Português</SelectItem>
                            <SelectItem value="fr">Français</SelectItem>
                            <SelectItem value="hi">हिन्दी</SelectItem>
                            <SelectItem value="sw">Kiswahili</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="currency">Currency</Label>
                        <Select value={settings.currency} onValueChange={(value) => updateSetting('currency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="USD">USD ($)</SelectItem>
                            <SelectItem value="EUR">EUR (€)</SelectItem>
                            <SelectItem value="BRL">BRL (R$)</SelectItem>
                            <SelectItem value="KES">KES (KSh)</SelectItem>
                            <SelectItem value="INR">INR (₹)</SelectItem>
                            <SelectItem value="MXN">MXN ($)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timezone">Timezone</Label>
                        <Select value={settings.timezone} onValueChange={(value) => updateSetting('timezone', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select timezone" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="UTC">UTC</SelectItem>
                            <SelectItem value="EST">EST (New York)</SelectItem>
                            <SelectItem value="PST">PST (Los Angeles)</SelectItem>
                            <SelectItem value="GMT">GMT (London)</SelectItem>
                            <SelectItem value="CET">CET (Berlin)</SelectItem>
                            <SelectItem value="JST">JST (Tokyo)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button onClick={handleSaveSettings} className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                      <Save className="h-4 w-4 mr-2" />
                      Save Preferences
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Wallet Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-950/50 dark:to-blue-950/50 rounded-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <p className="font-medium">Current Balance</p>
                        <p className="text-2xl font-bold text-green-600">${user?.balance.toLocaleString()}</p>
                      </div>
                      {user?.walletAddress && (
                        <div className="space-y-2">
                          <p className="text-sm text-muted-foreground">Wallet Address</p>
                          <p className="font-mono text-sm bg-background p-2 rounded border">
                            {user.walletAddress}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <Button variant="outline" className="h-16 flex flex-col">
                        <DollarSign className="h-5 w-5 mb-1" />
                        Deposit Funds
                      </Button>
                      <Button variant="outline" className="h-16 flex flex-col">
                        <CreditCard className="h-5 w-5 mb-1" />
                        Withdraw
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </main>
    </div>
  );
}